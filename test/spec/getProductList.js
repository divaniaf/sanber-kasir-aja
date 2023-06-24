const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY0NmIyNGFhLWZiOGQtNDU5ZC1iNjUwLWI0MGEwMjZhNGE2ZiIsImNvbXBhbnlJZCI6ImUzODdjOWUyLTZiODctNDg5Ni1hNzU3LTRhZWY1YjEwYTA0NyIsImlhdCI6MTY4NzYwODI3MH0.zvNOaAnqK1HvDChMfDfVEVE1_IhnFBY7klRNBEeyHoU";

describe("GET /products", function(){
    it("returns product list", async function(){
        const response = await request
                        .get("/products")
                        .set({
                            Authorization : AUTH
                        });
        
        expect(response.status).to.eql(200)
        console.log(response);
    })
})