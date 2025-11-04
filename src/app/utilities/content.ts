import * as fs from 'fs';
import * as path from 'path';
import type { ContentData } from '@/types';

const CONTENT_API_URL = '/api/content.json';

export async function getContentData(): Promise<ContentData> {
    // Check if we are running in a Node.js environment (server-side rendering or build)
    if (typeof window === 'undefined') {
        try {
            // Read content.json from the project root during build/SSR
            const filePath = path.join(process.cwd(), 'content.json');
            const fileContents = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(fileContents) as ContentData;
        } catch (error) {
            console.error('ERROR: Failed to read content.json from filesystem.', error);
            throw new Error('Failed to read content data.');
        }
    }

    // Fallback for client-side runtime - fetches from Nginx-served endpoint in production
    const response = await fetch(CONTENT_API_URL);

    if (!response.ok) {
        console.error(`Failed to fetch content data at runtime. Status: ${response.status}`);
        throw new Error('Failed to fetch content data.');
    }

    return response.json();
}
