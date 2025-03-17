interface GithubAsset {
    name: string;
    browser_download_url: string;
    size: number;
}

interface GithubRelease {
    tag_name: string;
    assets: GithubAsset[];
}

interface DownloadOption {
    url: string;
    size: number;
}

export interface TocklerRelease {
    version: string;
    downloadUrls: {
        mac: {
            default: DownloadOption;
            arm64: DownloadOption;
            arm64Dmg: DownloadOption;
            dmg: DownloadOption;
        };
        windows: {
            default: DownloadOption;
            portable: {
                arm64: DownloadOption;
                ia32: DownloadOption;
                x64: DownloadOption;
                default: DownloadOption;
            };
            setup: {
                arm64: DownloadOption;
                ia32: DownloadOption;
                x64: DownloadOption;
                default: DownloadOption;
            };
        };
        linux: DownloadOption;
    };
}

// Function to format bytes to human-readable format (MB)
export function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const megabytes = bytes / (1024 * 1024);
    return `${megabytes.toFixed(1)} MB`;
}

export async function getLatestTocklerRelease(): Promise<TocklerRelease | null> {
    try {
        const response = await fetch('https://api.github.com/repos/MayGo/tockler/releases/latest', {
            headers: {
                Accept: 'application/vnd.github.v3+json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch latest release');
        }

        const data: GithubRelease = await response.json();

        // Find assets by file patterns
        const findAsset = (pattern: string): DownloadOption => {
            const asset = data.assets.find((asset) => asset.name.includes(pattern));
            return asset ? { url: asset.browser_download_url, size: asset.size } : { url: '', size: 0 };
        };

        // Get version without 'v' prefix
        const version = data.tag_name.replace('v', '');

        // Create fallback for when an asset isn't found
        const defaultAsset = findAsset('.dmg');
        const emptyOption: DownloadOption = { url: '', size: 0 };

        return {
            version,
            downloadUrls: {
                mac: {
                    default: findAsset('-mac.zip') || defaultAsset,
                    arm64: findAsset('arm64-mac.zip') || emptyOption,
                    arm64Dmg: findAsset('arm64.dmg') || emptyOption,
                    dmg: findAsset('.dmg') || emptyOption
                },
                windows: {
                    default: findAsset('-setup-win.exe') || emptyOption,
                    portable: {
                        arm64: findAsset('-portable-win-arm64.exe') || emptyOption,
                        ia32: findAsset('-portable-win-ia32.exe') || emptyOption,
                        x64: findAsset('-portable-win-x64.exe') || emptyOption,
                        default: findAsset('-portable-win.exe') || emptyOption
                    },
                    setup: {
                        arm64: findAsset('-setup-win-arm64.exe') || emptyOption,
                        ia32: findAsset('-setup-win-ia32.exe') || emptyOption,
                        x64: findAsset('-setup-win-x64.exe') || emptyOption,
                        default: findAsset('-setup-win.exe') || emptyOption
                    }
                },
                linux: findAsset('.AppImage') || emptyOption
            }
        };
    } catch (error) {
        console.error('Error fetching latest release:', error);
        return null;
    }
}
