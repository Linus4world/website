export interface Project {
    logo: string;
    runtime: string;
    title: string;
    shortDescription: string;
    download: string;
    paragraphs: {
        title: string;
        text: string;
        images: string[];
        captions: string[];
    };
    footnotes: string[];
}
