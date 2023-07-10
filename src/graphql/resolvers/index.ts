import authorReslover from './author';
import bookReslover from './book';

export const resolvers = {
    Query: {
        ...authorReslover.Query,
        ...bookReslover.Query
    }
}


