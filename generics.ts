class Queue<T> {
    private data: T[] = [];

    add(item: T){
        this.data.push(item);
    }

    remove(item){
        this.data.shift();
    }
}

const nameQueue = new Queue<string>();
nameQueue.add('Pesho');
nameQueue.add('Gosho');

const numberQueue = new Queue<number>();
numberQueue.add(10);
numberQueue.add(5);