import { CommentsCreateDto } from '../dto/comments.create.dto';
import { CommentsService } from '../services/comments.service';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    getAllComments(): Promise<import("../comments.schema").Comments[]>;
    createComment(id: string, body: CommentsCreateDto): Promise<import("../comments.schema").Comments>;
    plusLike(id: string): Promise<import("../comments.schema").Comments>;
}
