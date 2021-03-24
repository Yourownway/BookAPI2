class Article {
  constructor(title, resume = null, content = null) {
    this.title = title;
    this.resume = resume;
    this.content = content;
    this.user = null;
  }

  setUser(user) {
    this.user = user;
  }
}

class User {
  constructor(emailValue, passwordValue = null) {
    this.email = emailValue;
    this.password = passwordValue;
    this.articles = [];
  }

  getEmail() {
    return this.email;
  }

  getArticles(filters) {
    data = [
      { id: 1, title: "tt", user: { email: "ee", password: "tt" } },
      { id: 2, title: "ee" },
    ];
    data.forEach((articleData) => {
      let article = new Article(articleData.title);
      let user = new User(articleData.user.email, articleData.user.password);

      article.setUser(user);

      this.articles.push(article);
    });
  }
}

class Admin extends User {
  constructor(email, password, role) {
    super(email, password);
    this.role = role;
  }
}

let admin = new Admin("test", "testst", "superadmin");
let email = admin.getEmail();
console.log(email);
