function Branch(begin, end){
    this.begin = begin;
    this.end = end;

    this.show = function(){
        stroke('#00e5ff');
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }
}