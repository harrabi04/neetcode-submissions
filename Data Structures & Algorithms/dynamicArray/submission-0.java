class DynamicArray {
    int[] array;
    int size = 0;
    int capacity;
    public DynamicArray(int capacity) {
        this.capacity = capacity;
        this.array = new int[capacity];
    }

    public int get(int i) {
        return array[i];
    }

    public void set(int i, int n) {
        array[i] = n;
        if (i == size) {
            size++;
    }
    }

    public void pushback(int n) {
        if (size >= capacity * 0.7){
            resize();
        }
        array[size++] = n;
    }

    public int popback() {
        int value = array[--size];
        array[size] = 0; // optional: reset to default
        return value;
    }

    private void resize() {
         int[] newArray;
         newArray =  new int[capacity * 2];
         int index = 0;
         while(index < size){
           newArray[index] = array[index];
           index++;
        }
        array = newArray;
        capacity = capacity * 2;
    }

    public int getSize() {
        return size;
    }

    public int getCapacity() {
        return capacity;
    }
}
