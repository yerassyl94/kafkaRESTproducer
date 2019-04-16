const kafka = require('kafka-node');
const config = require('./config');
const Producer = kafka.Producer;
const Client = kafka.KafkaClient;

function producer(message) {
	if(config.kafka_server === '' || config.kafka_topic === ''){
	console.log('PLEASE INPUT YOUR KAFKA CONFIGS')
	}

    try {
        const client = new Client({kafkaHost: config.kafka_server});
        const producer = new Producer(client);

        let payloads = [{
            topic: config.kafka_topic,
            messages: message
        }];

        producer.on('ready', async function() {
            producer.send(payloads, (err,data) => {
                if (err) {
                    console.log('error')
                } else {
                    console.log('success')
                }
            })
        });

        producer.on('error', function (err) {
            console.log('error' + err);
            throw err;
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = producer;
