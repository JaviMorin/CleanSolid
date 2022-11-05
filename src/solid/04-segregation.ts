interface Bird{
    eat():void ;
}

interface RunningBird{
    run():void ;
}

interface FlyingBird{
    fly():void ;
}

interface SwimmingBird{
    swim():void ;
}

class Tucan implements Bird,FlyingBird {
    public fly() {}
    public eat() {}
}

class Huminbird implements Bird,FlyingBird {
    public fly() {}
    public eat() {}
}

class Ostrich implements Bird,RunningBird {
    public eat() {}
    public run() {}
}

class Penguin implements Bird,SwimmingBird {
    public eat() {}
    public run() {}
    public swim() {}
}