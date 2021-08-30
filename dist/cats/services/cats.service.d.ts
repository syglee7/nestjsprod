import { Cat } from '../cats.schema';
import { CatRequestDto } from '../dto/cats.request.dto';
import { CatsRepository } from '../cats.repository';
export declare class CatsService {
    private readonly catsRepository;
    constructor(catsRepository: CatsRepository);
    getAllCat(): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    }[]>;
    uploadImg(cat: Cat, file: any): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    }>;
    signUp(body: CatRequestDto): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    }>;
}
