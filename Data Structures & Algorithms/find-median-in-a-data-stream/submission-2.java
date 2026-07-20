class MedianFinder {
    List<Integer> list = new ArrayList();
    public MedianFinder() {
        
    }
    
    public void addNum(int num) {
        list.add(num);
    }
    
    public double findMedian() {
        Collections.sort(list);
        int n = list.size(); //2
        if(n == 1) return (double) list.getFirst();
        if(n % 2 == 0){
            return (list.get( n / 2) + list.get((n/2) - 1)) / 2.0;
        }else{
            System.out.println(n);
            return (double) list.get(n / 2);
        }
    }
}
