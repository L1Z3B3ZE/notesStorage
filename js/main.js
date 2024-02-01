let app = new Vue({
    el: '#app',
    data: {
        newItemText: '',
        taskTitle: '',
        column1: [],
        column2: [],
        column3: [],
    },
    methods: {
        addTask() {
            const newTask = {
                id: Date.now(),
                title: this.taskTitle,
                items: this.newItemText.split('\n').filter(item => item.trim() !== '').map(item => ({
                    text: item,
                    checked: false
                }))
            };

            this.column1.push(newTask);

        }
    },
})