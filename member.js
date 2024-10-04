function skillsMember() {
    var self = this;
    self.skills = ko.observableArray([
        { name: "HTML5", value: 90 },
        { name: "CSS3", value: 90 },
        { name: "JavaScript", value: 80 },
        { name: "jQuery", value: 80 },
        { name: "Knockout", value: 70 },
        { name: "Angular", value: 70 },
        { name: "Node", value: 70 },
        { name: "MongoDB", value: 70 },
        { name: "MySQL", value: 70 },
        { name: "PHP", value: 70 },
        { name: "C#", value: 70 },
        { name: "Java", value: 70 },
        { name: "Python", value: 70 }
    ]);
}