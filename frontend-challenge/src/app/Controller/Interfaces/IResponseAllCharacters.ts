export interface ICharacters{
    code: string,
    status: string,
    copyright: string,
    attributionText: string,
    attributionHTML: string,
    data: {
        offset: string,
        limit: string,
        total: string,
        count: string,
        results?: Array<{ id: string, name: string, description: string, modified: string, resourceURI: string, urls: Array<{ type: string, url: string }>, thumbnail: { path: string, extension: string }, comics: { available: string, returned: string, collectionURI: string, items: Array<{ resourceURI: string, name: string }> }, stories: { available: string, returned: string, collectionURI: string, items: Array<{ resourceURI: string, name: string, type: string }> }, events: { available: string, returned: string, collectionURI: string, items: Array<{ resourceURI: string, name: string }> }, series: { available: string, returned: string, collectionURI: string, items: Array<{ resourceURI: string, name: string }> } }>
    },
    etag: string
}
export const InitialStateCharacters: ICharacters = {
    code: '',
    status: '',
    copyright: '',
    attributionText: '',
    attributionHTML: '',
    data: {
        offset: '',
        limit: '',
        total: '',
        count: '',
    },
    etag: ''
}