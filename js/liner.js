class SlingLine {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.007,
            length: 10.3
        }
       // var sling = this.sling
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null
   }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke(160,82,45)
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
    }
    
}
