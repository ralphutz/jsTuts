let user = {
    name: "crystal",
    age: 30,
    email: "test@cool.com",
    location: "berlin",
    blogs: ["why mac and cheese", "10 cool things"],
    login: function() {
        console.log("the user logged in");
    },
    logout: function() {
        console.log("the user logged out");
    }
};

user.login();
user.logout();
