# vue-worker-bus

A simple vue bus to interact with a web worker.

## How to use

More detailed readme TBA

### example.js
```JS
import VueWorkerBus from 'vue-worker-bus'

exampleWorker = new VueWorkerBus(new Worker('worker.js'))

exampleWorker.$on('foo', (payload) => {
  console.log(payload)
})

exampleWorker.dispatch('bar', {foo: 'bar'})
```

### worker.js
```JS
self.addEventListener('message', function(e) {
  console.log(e.data.action)
  console.log(e.data.payload)
}

self.postMessage({
  action: 'foo',
  payload: {}
})
```
