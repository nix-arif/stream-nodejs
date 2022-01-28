const { Readable } = require("stream");

const advices = [
  "No ice for drinks? Use frozen vegetables",
  "If you feel alone, watch a horror movie before going to bed. You won't feel alone anymore.",
  "Bon't have sex after chopping jalapones",
  "If you can't blind them with brilliance, baffle them with nonsense",
  "Always borrow money from a pessimist, they won't expect it back",
];

let x;

class StreamFromArray extends Readable {
  constructor(array) {
    super();
    this.array = array;
    this.index = 0;
    // console.log(this);
    x = this;
  }

  _read() {
    if (this.index <= this.array.length) {
      const chunk = this.array[this.index];
      this.push(chunk);
      this.index += 1;
    } else {
      this.push(null);
    }
  }
}

const adviceStream = new StreamFromArray(advices);

adviceStream.on("data", (chunk) => {
  //   console.log("Hello", this);
  //   console.log(chunk);
});

adviceStream.on("end", () => {
  console.log("Habis");
});

console.log(adviceStream === x);
