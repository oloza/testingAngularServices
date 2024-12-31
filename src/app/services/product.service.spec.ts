import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Product } from '../models/product.model';
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
    it('should return a pruducts list',()=>{
        //Arrange
        const mockData:Product[]=[
            {id:'123',
            title:'title',
            price:12,
            description:'lorem ipsum',
            category:{
                id:122,
                name:'as'
            },
            images:['img1' ,'img2'] 
        }
        ];
        //Act
        productService.getAll()
        .subscribe(()=>{
            //Assert
            doneFn();
        });
        const url =`${environment.API_URL}/api/v1/products` ;  
        const req = httpController.expectOne(url);
        req.flush(mockData);
    });
 });

});
