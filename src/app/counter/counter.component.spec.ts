import { TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
describe("CounterComponent",()=>{

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CounterComponent],
        }).compileComponents();
    });

    it("se debe crear el componente counter",()=>{
        const fixture=TestBed.createComponent(CounterComponent)

    expect(fixture.componentInstance).toBeTruthy


    })

    it(
        "valor inicial del contador es 23",()=>{
            const counter= new CounterComponent()

            expect(counter.contador).toBe(23)
        }
    )
})