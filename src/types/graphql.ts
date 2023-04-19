export namespace Queries {
    export type HeadQuery = {
      newtPost: {
        title: string;
      };
    };

    export type ArticlePageQuery = {
      newtPost: {
        title: string;
        body: string;
        date: Date;
      };
    };

    export type IndexPageQuery = {
      allNewtPost: {
        edges: Array<{
          node: {
            _id: string;
            title: string;
            slug: string;
            category: {
              name: string
            };
            coverImage: {
              src: string;
            };
          	date: Date;
          };
        }>;
      };
    };
}
  