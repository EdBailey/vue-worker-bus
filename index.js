import Vue from 'vue'
export default function (worker) {
    return new Vue({
        data: {
            worker
        },
        methods: {
            dispatch(action, payload = undefined) {
                this.worker.postMessage({
                    action,
                    payload
                })
            }
        },
        created() {
            worker.addEventListener('message', (event) => {
                this.$emit(event.data.action, event.data.payload, event)
            })
        }
    })
}
