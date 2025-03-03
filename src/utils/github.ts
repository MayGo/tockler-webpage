interface GithubAsset {
    name: string;
    browser_download_url: string;
}

interface GithubRelease {
    tag_name: string;
    assets: GithubAsset[];
}

export interface TocklerRelease {
    version: string;
    downloadUrls: {
        mac?: string;
        windows?: string;
        linux?: string;
    };
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
        return {
            version: data.tag_name.replace('v', ''),
            downloadUrls: {
                mac: data.assets.find((asset) => asset.name.endsWith('arm64.dmg'))?.browser_download_url,
                windows: data.assets.find((asset) => asset.name.endsWith('setup-win.exe'))?.browser_download_url,
                linux: data.assets.find((asset) => asset.name.endsWith('.AppImage'))?.browser_download_url
            }
        };
    } catch (error) {
        console.error('Error fetching latest release:', error);
        return null;
    }
}
