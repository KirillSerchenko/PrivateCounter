const fillLine = (() => {
    let index = 0
    let id = "people",
        counter = 15
    let id_c = "chairs",
        counter_c = 0
    let peopleCounter = "",
        chairsCounter = "",
        counters = "",
        print = "",
        print2 = ""
    
    const checkIndex = () => {
        document.getElementById("lexicalScope").innerHTML =
            `<div class="card slit-in-vertical" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">LexicalScope</h5>
        <h6 class="card-subtitle mb-2 text-muted">Variables</h6>
        <p class="card-text">
        ${peopleCounter}
        </br>
        ${chairsCounter}
        </br>
        ${counters}
        </br>
        <span style="color:red">${print}</span>
        </br>
        <span style="color:red">${print2}</span>
        </div>
      </div>`
        console.log(index)
        switch (index) {
            case 0:
                peopleCounter = "peopleCounter"
                document.getElementById("peopleCounter").innerHTML =
                    `<div class="card slit-in-vertical" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">People Counter</h5>
            <h6 class="card-subtitle mb-2 text-muted">Variables</h6>
            <p id="peopleData" class="card-text">
            id=${id}
            </br>
            counter=${counter}
            changeValue(function)
            </br>
            </br>
            </br>
            increment(function)</br>
            decrement(function)</br>
            getCount(function)</br>
            getId(function)</br>
            compare(function)</br>
            </p>
            </div>
          </div>`

                break;
            case 1:
                chairsCounter = "chairsCounter"
                document.getElementById("chairsCounter").innerHTML =
                    `<div class="card slit-in-vertical" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Chairs Counter</h5>
            <h6 class="card-subtitle mb-2 text-muted">Variables</h6>
            <p id="chairsData" class="card-text">
            id=${id_c}
            </br>
            counter=${counter_c}
            </br>
            changeValue(function)
            </br>
            </br>
            </br>
            increment(function)</br>
            decrement(function)</br>
            getCount(function)</br>
            getId(function)</br>
            compare(function)</br>
            </p>
            </div>
          </div>`
                break;

            case 2:
                counters = "counters [peopleCounter,chairsCounter]"
                break;
            case 3:
                counter_c = 10;
                document.getElementById("chairsData").innerHTML =
                    `id=${id_c}
            </br>
            <span style="color:red" class="tracking-in-contract-bck">counter=${counter_c}</span>
            </br>
            changeValue(function)
            </br>
            </br>
            </br>
            increment(function)</br>
            decrement(function)</br>
            getCount(function)</br>
            getId(function)</br>
            compare(function)</br>
            `

                break;
            case 4:
                document.getElementById("chairsCounter").innerHTML =
                    `<div class="card slit-in-vertical" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Chairs Counter</h5>
            <h6 class="card-subtitle mb-2 text-muted">Variables</h6>
            <p id="chairsData" class="card-text">
            id=${id_c}
            </br>
            counter=${counter_c}
            </br>
            changeValue(function)
            </br>
            </br>
            </br>
            increment(function)</br>
            decrement(function)</br>
            getCount(function)</br>
            getId(function)</br>
            compare(function)</br>
            </p>
            </div>
          </div>`
                counter -= 1
                document.getElementById("peopleData").innerHTML =
                    `id=${id}
            </br>
            <span class="tracking-in-contract-bck" style="color:red">counter=${counter}</span>
            </br>
            <span class="tracking-in-contract-bck" style="color:red">changeValue(function)</span>
            </br>
            </br>
            </br>
            increment(function)</br>
            <span class="tracking-in-contract-bck" style="color:red">decrement(function)</br></span>
            getCount(function)</br>
            getId(function)</br>
            compare(function)</br>
            `

                break;
            case 5:
                document.getElementById("chairsCounter").innerHTML =
                    `<div class="card slit-in-vertical" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Chairs Counter</h5>
            <h6 class="card-subtitle mb-2 text-muted">Variables</h6>
            <p id="chairsData" class="card-text">
            id=${id_c}
            </br>
            counter=${counter_c}
            </br>
            changeValue(function)
            </br>
            </br>
            </br>
            increment(function)</br>
            decrement(function)</br>
            getCount(function)</br>
            getId(function)</br>
            compare(function)</br>
            </p>
            </div>
          </div>`
                document.getElementById("peopleCounter").innerHTML =
                    `<div class="card slit-in-vertical" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">People Counter</h5>
            <h6 class="card-subtitle mb-2 text-muted">Variables</h6>
            <p id="peopleData" class="card-text">
            id=${id}
            </br>
            counter=${counter}
            changeValue(function)
            </br>
            </br>
            </br>
            increment(function)</br>
            decrement(function)</br>
            getCount(function)</br>
            getId(function)</br>
            compare(function)</br>
            </p>
            </div>
          </div>`
                counter_c -= 1
                document.getElementById("chairsData").innerHTML =
                    `id=${id_c}
            </br>
            <span class="tracking-in-contract-bck" style="color:red">counter=${counter_c}</span>
            </br>
            <span class="tracking-in-contract-bck" style="color:red">changeValue(function)</span>
            </br>
            </br>
            </br>
            increment(function)</br>
            <span class="tracking-in-contract-bck" style="color:red">decrement(function)</br></span>
            getCount(function)</br>
            getId(function)</br>
            compare(function)</br>
            `
                break;
            case 6:
                counter_c -= 1
                document.getElementById("chairsData").innerHTML =
                    `id=${id_c}
            </br>
            <span class="tracking-in-contract-bck" style="color:red">counter=${counter_c}</span>
            </br>
            <span class="tracking-in-contract-bck" style="color:red">changeValue(function)</span>
            </br>
            </br>
            </br>
            increment(function)</br>
            <span class="tracking-in-contract-bck" style="color:red">decrement(function)</br></span>
            getCount(function)</br>
            getId(function)</br>
            compare(function)</br>
            `
                break;

            case 7:
                document.getElementById("peopleCounter").innerHTML =
                    `<div class="card slit-in-vertical" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">People Counter</h5>
            <h6 class="card-subtitle mb-2 text-muted">Variables</h6>
            <p id="peopleData" class="card-text">
            id=${id}
            </br>
            counter=${counter}
            changeValue(function)
            </br>
            </br>
            </br>
            increment(function)</br>
            decrement(function)</br>
            <span class="tracking-in-contract-bck" style="color:red">getCount(function)</br></span>
            <span class="tracking-in-contract-bck" style="color:red">getId(function)</br></span>
            compare(function)</br>
            </p>
            </div>
          </div>`
                document.getElementById("chairsCounter").innerHTML =
                    `<div class="card slit-in-vertical" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Chairs Counter</h5>
            <h6 class="card-subtitle mb-2 text-muted">Variables</h6>
            <p id="chairsData" class="card-text">
            id=${id_c}
            </br>
            counter=${counter_c}
            </br>
            changeValue(function)
            </br>
            </br>
            </br>
            increment(function)</br>
            decrement(function)</br>
            <span class="tracking-in-contract-bck" style="color:red">getCount(function)</br></span>
            <span class="tracking-in-contract-bck" style="color:red">getId(function)</br></span>
            compare(function)</br>
            </p>
            </div>
          </div>`
                print = "PRINT! people Counter has 14 chairs Counter has 8";
                break;
            case 8:
                print2 = "PRINT! We dont have enough chairs";
                document.getElementById("peopleData").innerHTML =
                    `id=${id}
            </br>
            counter=${counter}
            </br>
            changeValue(function)
            </br>
            </br>
            </br>
            increment(function)</br>
            decrement(function)</br>
            getCount(function)</br>
            getId(function)</br>
            <span class="tracking-in-contract-bck" style="color:red">compare(function)</span></br>
            `
                document.getElementById("chairsCounter").innerHTML =
                    `<div class="card slit-in-vertical" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Chairs Counter</h5>
            <h6 class="card-subtitle mb-2 text-muted">Variables</h6>
            <p id="chairsData" class="card-text">
            id=${id_c}
            </br>
            counter=${counter_c}
            </br>
            changeValue(function)
            </br>
            </br>
            </br>
            increment(function)</br>
            decrement(function)</br>
            getCount(function)</br>
            getId(function)</br>
            compare(function)</br>
            </p>
            </div>
          </div>`
                break;
            case 9:
                document.getElementById("peopleCounter").innerHTML =
                    `<div class="card slit-in-vertical" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">People Counter</h5>
            <h6 class="card-subtitle mb-2 text-muted">Variables</h6>
            <p id="peopleData" class="card-text">
            id=${id}
            </br>
            counter=${counter}
            changeValue(function)
            </br>
            </br>
            </br>
            increment(function)</br>
            decrement(function)</br>
            getCount(function)</br>
            getId(function)</br>
            compare(function)</br>
            </p>
            </div>
          </div>`
                break;
            default:
                location.reload()
                break;
        }
    }

    return () => {
        linesArr.map((element, ind) => {
            if(ind == index)
            { 
                element.style.color = "red"
                element.style.transform = "scale(1.1)"
                element.style.fontWeight = "bold"
                element.style.opacity="1"
            } 
            else if(ind < index){
                element.style.color = "green"
                element.style.opacity="1"
                element.style.transform = "scale(1)"
            }
            else
            { 
                element.style.color = "black"
                element.style.opacity="0.3"
                element.style.fontWeight = "normal"
                element.style.transform = "scale(1)"
            }
        })
        checkIndex()
        index += 1
    }
})

const func = fillLine()
const myButton = document.getElementById("myButton")
const lines = document.getElementsByTagName("p")
const linesArr = Object.keys(lines).map(line => lines[line])
myButton.onclick = func