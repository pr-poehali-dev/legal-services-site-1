import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Арбитражные споры",
      description: "Профессиональное представительство в арбитражных судах всех инстанций",
      icon: "Scale"
    },
    {
      title: "Представительство в судах",
      description: "Квалифицированная защита ваших интересов в судах общей юрисдикции",
      icon: "Building"
    },
    {
      title: "Корпоративное право",
      description: "Комплексное юридическое сопровождение бизнеса",
      icon: "Briefcase"
    },
    {
      title: "Договорная работа",
      description: "Подготовка, анализ и сопровождение договоров",
      icon: "FileText"
    }
  ];

  const team = [
    {
      name: "Анна Петрова",
      position: "Старший партнёр",
      experience: "15 лет опыта",
      specialization: "Арбитражные споры"
    },
    {
      name: "Михаил Сидоров",
      position: "Партнёр",
      experience: "12 лет опыта", 
      specialization: "Корпоративное право"
    },
    {
      name: "Елена Козлова",
      position: "Ведущий юрист",
      experience: "8 лет опыта",
      specialization: "Договорная работа"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Scale" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-gray-900">Юридические услуги</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О нас</a>
              <a href="#team" className="text-gray-600 hover:text-primary transition-colors">Команда</a>
              <a href="#practice" className="text-gray-600 hover:text-primary transition-colors">Практика</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button>Консультация</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Профессиональная юридическая помощь
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Специализируемся на арбитражных спорах и представительстве в судах. 
                Защищаем интересы бизнеса с 2010 года.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Наши кейсы
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/cf134d45-e56f-4316-bdb6-bce5f4dd2f88.jpg" 
                alt="Юридический офис" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Предоставляем полный спектр юридических услуг для бизнеса и частных лиц
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">О нас</h2>
              <p className="text-lg text-gray-600 mb-6">
                Наша юридическая компания работает с 2010 года и специализируется на сложных арбитражных спорах. 
                Мы представляем интересы клиентов в судах всех инстанций и добиваемся положительных результатов.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-500" />
                  <span className="text-gray-700">Более 500 выигранных дел</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-500" />
                  <span className="text-gray-700">15+ лет опыта в арбитраже</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-500" />
                  <span className="text-gray-700">Индивидуальный подход к каждому клиенту</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Award" className="text-primary" />
                    <span>Наш принцип</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Мы не просто оказываем юридические услуги – мы защищаем ваш бизнес и добиваемся справедливости.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Target" className="text-primary" />
                    <span>Наша цель</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Предоставить клиентам максимально эффективную правовую защиту с минимальными рисками.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наша команда</h2>
            <p className="text-xl text-gray-600">
              Опытные юристы с многолетней практикой в арбитражных спорах
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-gray-500" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{member.experience}</p>
                  <p className="text-sm text-gray-500">{member.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Сферы практики</h2>
            <p className="text-xl text-gray-600">
              Специализируемся на сложных правовых вопросах
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Gavel" size={32} className="text-primary mb-4" />
                <CardTitle>Арбитражное процессуальное право</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Ведение дел в арбитражных судах первой, апелляционной и кассационной инстанций</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Building2" size={32} className="text-primary mb-4" />
                <CardTitle>Корпоративные споры</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Защита прав акционеров, споры о корпоративном управлении</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="FileContract" size={32} className="text-primary mb-4" />
                <CardTitle>Договорные споры</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Взыскание задолженности, расторжение договоров, неустойка</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Получить консультацию</h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами для бесплатной предварительной консультации
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в течение часа</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" />
                <Input placeholder="Email" />
                <Textarea placeholder="Опишите вашу ситуацию" rows={4} />
                <Button className="w-full">Отправить заявку</Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="MapPin" className="text-primary" />
                    <span>Адрес</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">г. Москва, ул. Тверская, д. 12, офис 305</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Phone" className="text-primary" />
                    <span>Телефон</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                  <p className="text-gray-600">+7 (495) 123-45-68</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Mail" className="text-primary" />
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">info@legalservices.ru</p>
                  <p className="text-gray-600">consultation@legalservices.ru</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Clock" className="text-primary" />
                    <span>Режим работы</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 19:00</p>
                  <p className="text-gray-600">Сб: 10:00 - 16:00</p>
                  <p className="text-gray-600">Вс: выходной</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Scale" size={24} className="text-primary" />
                <span className="text-xl font-bold">Юридические услуги</span>
              </div>
              <p className="text-gray-400">
                Профессиональная юридическая помощь в арбитражных спорах и представительство в судах.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <p>г. Москва, ул. Тверская, д. 12</p>
                <p>+7 (495) 123-45-67</p>
                <p>info@legalservices.ru</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <div className="space-y-2 text-gray-400">
                <p>Арбитражные споры</p>
                <p>Представительство в судах</p>
                <p>Корпоративное право</p>
                <p>Договорная работа</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Юридические услуги. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;