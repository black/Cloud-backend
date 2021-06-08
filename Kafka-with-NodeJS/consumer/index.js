import Kafka from "node-rdkafka"

const consumer = Kafka.KafkaConsumer( /*passing broker list*/ {
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092'
}, {});

consumer.connect()
consumer.on('ready', () => {
    console.log('consumer ready...')
    /*since consumer is ready, let's subscribe to a topic*/
    consumer.subscribe(['test', 'butterfly'])
    consumer.consume()
}).on('data', () => {
    console.log(`received:${data}`)
})

console.log("Consumer")