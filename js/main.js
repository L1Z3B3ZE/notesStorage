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
        checkCompletion(card) {
            const totalItems = card.items.length;
            const completedItems = card.items.filter(item => item.checked).length;
            const completionPercentage = (completedItems / totalItems) * 100;

            if (completionPercentage > 50 && completionPercentage < 100) {
                this.moveCard(card, this.column1, this.column2);
            }
            else if (completionPercentage === 100) {
                this.moveCard(card, this.column2, this.column3);
                card.timestamp = new Date().toLocaleString();
            }
        },
        moveCard(card, sourceColumn, targetColumn) {
            const index = sourceColumn.indexOf(card);
            if (index > -1) {
                sourceColumn.splice(index, 1);
                targetColumn.push(card);
            }
        },
    },
})