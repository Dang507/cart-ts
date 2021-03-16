export default interface IProduct {
    Size: string[];
    Name: string;
    Quantity: number;
    Id: number;
    Price: number;
    Title:string;
    Available: string;
    Description: string;
    Image: HTMLImageElement&string;
}