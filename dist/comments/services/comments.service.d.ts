import { CatsRepository } from './../../cats/cats.repository';
import { Model } from 'mongoose';
import { Comments } from '../comments.schema';
import { CommentsCreateDto } from '../dto/comments.create.dto';
export declare class CommentsService {
    private readonly commentsModel;
    private readonly catsReposistory;
    constructor(commentsModel: Model<Comments>, catsReposistory: CatsRepository);
    getAllComments(): Promise<Comments[]>;
    createComment(id: string, commentData: CommentsCreateDto): Promise<Comments>;
    plusLike(id: string): Promise<Comments>;
}
