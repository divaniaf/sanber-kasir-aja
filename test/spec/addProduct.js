const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY0NmIyNGFhLWZiOGQtNDU5ZC1iNjUwLWI0MGEwMjZhNGE2ZiIsImNvbXBhbnlJZCI6ImUzODdjOWUyLTZiODctNDg5Ni1hNzU3LTRhZWY1YjEwYTA0NyIsImlhdCI6MTY4NzYwODI3MH0.zvNOaAnqK1HvDChMfDfVEVE1_IhnFBY7klRNBEeyHoU";

describe("POST /products", function(){
    it("add new product", async function(){
        const response = await request
                        .post("/products")
                        .send({
                            "category_id": "94bc11b7-7616-40ed-abcf-1f4031a8f6ef",
                            "code": "ABC000002",
                            "name": "Almond Croissant",
                            "price": "15500",
                            "cost": "5000",
                            "stock": "9"
                        })
                        .set({
                            Authorization: AUTH
                        });
        
        expect(await response.statusCode).to.eql(201);
        expect(await response.body.data.name).to.eql("Almond Croissant");

        console.log(response);
    })
})