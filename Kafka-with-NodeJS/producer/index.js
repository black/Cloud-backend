import Kafka from "node-rdkafka"

const stream = Kafka.Producer.createWriteStream({
    'metadata.broker.list.list': 'localhost:9092'
}, {}, {
    /*Topics*/
    topic: 'test'
});

//set interval to write message to the butterfly Topic every 1s

setInterval(() => {
    queMsg()
}, 1000)

function queMsg() {
    const result = stream.write(Buffer.from('hi'))
    if (result) {
        console.log("Message wrote successfully to stream")
    } else {
        console.log("Message failed to write on stream")
    }
    console.log(result)
}

console.log("Producer")