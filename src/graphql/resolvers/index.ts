import authorReslover from './user';
import bookReslover from './book';

export const resolvers = {
    Query: {
        ...authorReslover.Query,
        ...bookReslover.Query
    }
}


