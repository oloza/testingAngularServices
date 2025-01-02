import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Product } from '../models/product.model';
import { generateManyProducts } from '../models/product.mock';
import { ProductsService } from './product.service';
import { environment } from 'src/environments/environment';

fdescribe('ProductService', () => {
  let productService: ProductsService;  
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });
    productService= TestBed.inject(ProductsService);
    httpController=TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
       expect(productService).toBeTruthy();
     });

 describe('test for getAllSimple',()=>{
    it('should return a pruduct list',(doneFn)=>{
        //Arrange
        const mockData:Product[] = generateManyProducts(2);
        //Act
        productService.getAllSimple()
        .subscribe((data)=>{
            //Assert
            console.log(data);
            expect(data.length).toEqual(mockData.length);
             doneFn();
        });
        const url =`${environment.API_URL}/api/v1/products` ;  
        const req = httpController.expectOne(url);
        req.flush(mockData);
    });
 });

});


