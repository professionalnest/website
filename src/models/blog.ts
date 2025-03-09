export interface BlogAuthor {
    id: number,
    name: string,
    img: string
}

export interface BlogPost {
    id: number,
    title: string,
    tags: string[],
    img: string,
    author: BlogAuthor,
    date: string,
    summary: string,
    content: string
}