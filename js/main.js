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
                items: this.newItemText.split('\n').filter(item => item.trim() !== '').map(item => ({ text: item, checked: false }))
            };
            if (this.taskTitle !== '' && newTask.items.length >= 3 && newTask.items.length <= 5) {
                this.column1.push(newTask);

            } else alert("В заметке может быть минимум 3 и максимум 5 пунктов!!")
            this.taskTitle = '';
            this.newItemText = '';
        },
    },
})