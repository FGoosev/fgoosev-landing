import type { Resume } from "../types";
import avatarImg from "../assets/avatar.jpg";

export const resume: Resume = {
  name: "Гусев Александр Дмитриевич",
  title: "Fullstack .NET Developer (Middle+ / Senior) | AI / LLM-интеграции",
  tagline:
    "Проектирую и запускаю высоконагруженные веб-системы на C# / .NET и TypeScript / React - от архитектуры и оптимизации БД на миллионы записей до релиза в проде и внедрения мультиагентных LLM-систем",
  summary:
    "Fullstack .NET-разработчик с опытом промышленной разработки и коммерческого запуска собственных IT-продуктов; веду проекты полного цикла от общения с заказчиками, проектирования архитектуры и БД с нуля до написания бэкенда/фронтенда, настройки CI/CD и сопровождения релизов на Linux; развиваюсь в прикладном AI (мультиагентные пайплайны и интеграция LLM).",
  avatar: avatarImg,

  // ---------- Образование ----------
  education: [
    {
      direction:
        "Институт прикладных информационных систем, направление «Искусственный интеллект, математическое моделирование и суперкомпьютерные технологии»",
      degree: "Магистратура",
      institution: "СГТУ им. Гагарина, Саратов",
      startDate: "2023",
      endDate: "2025",
      description: "",
    },
    {
      direction:
        "Институт прикладных информационных систем, направление «Информационные системы и технологии»",
      degree: "Бакалавриат",
      institution: "СГТУ им. Гагарина, Саратов",
      startDate: "2019",
      endDate: "2023",
      description: "",
    },
  ],

  // ---------- Опыт ----------
  experience: [
    {
      position: "Fullstack .NET разработчик",
      company: "ООО «Синтеллект»",
      startDate: "июнь 2024",
      endDate: "н.в.",
      description:
        "внедрение и кастомизация low-code платформы Tessa, проектирование и релиз с нуля коробочного модуля «Делопроизводство» и типового решения Tessa CRM (растиражировано на клиентскую базу), оптимизация SQL-запросов для БД от 1 млн документов, фуллстек-разработка (C#, ASP.NET Core, PostgreSQL, MS SQL, TypeScript, React), сопровождение прода на Linux и CI/CD.",
    },
    {
      position: ".NET Core разработчик",
      company: "ООО «Телеком-сервис»",
      startDate: "январь 2023",
      endDate: "июнь 2024",
      description:
        "коммерческие проекты для медицины, образования и e-commerce, проектирование БД и бизнес-логики с нуля, разработка чат-ботов, прямая работа с заказчиками, роль Scrum‑мастера.",
    },
    {
      position: ".NET Core разработчик",
      company: "Space App",
      startDate: "сентябрь 2021",
      endDate: "ноябрь 2021",
      description:
        "разработка микросервисов на .NET Core, интеграция с внешними API",
    },
  ],

  // ---------- Проекты ----------
  projects: [
    {
      title: "Интерактивные ГИС-карты",
      description:
        "Коммерческое веб-приложение, первая в России ГИС-карта для определения ценовых зон и районов Крайнего Севера. Реализован самостоятельный запуск в эксплуатацию, расчет расстояний до произвольного объекта, автогенерация маршрутных отчетов через OSRM.",
      tech: ["Angular", "React", ".NET"],
    },
    {
      title: "Ассистент сметчика",
      description:
        "Telegram-бот и веб-версия для автоматического подбора норм и спецификаций для экспертизы смет.",
      tech: [
        "C#",
        ".NET Core",
        "Telegram Bot API",
        "React",
        "TypeScript",
        "Tailwind",
      ],
    },
    {
      title: "Платформа для репетиторов",
      description:
        "Платформа с реализованной интерактивной доской с синхронизацией между пользователями, календарем с возможностью интеграции на устройства в календари, личным кабинетом и администрированием.",
      tech: [
        ".NET Core",
        "React",
        "Tailwind",
        "Minimal API",
        "Telegram Bot API",
        "C#",
        "TypeScript",
      ],
    },
  ],

  // ---------- Навыки ----------
  skills: [
    {
      category: "Backend",
      items: [
        "C#",
        ".NET Core",
        "ASP.NET Core",
        "Entity Framework Core",
        "Linq2DB",
        "Minimal API",
        "Web API",
        "Blazor",
        "MudBlazor",
        "CLR/BCL",
      ],
    },
    {
      category: "Frontend",
      items: ["TypeScript", "React", "Angular"],
    },
    {
      category: "СУБД",
      items: [
        "PostgreSQL",
        "MS SQL",
        "MongoDB",
        "оптимизация SQL-запросов (1M+ записей)",
      ],
    },
    {
      category: "Архитектура и тестирование",
      items: [
        "CQRS",
        "MediatR",
        "проектирование с нуля",
        "доменное моделирование",
        "NUnit",
        "Scrum",
      ],
    },
    {
      category: "Инфраструктура",
      items: ["Docker", "CI/CD", "Kubernetes", "RabbitMQ", "Redis", "Linux"],
    },
    {
      category: "AI / LLM и агенты",
      items: [
        "LangGraph",
        "LiteLLM",
        "MCP (Model Context Protocol)",
        "Tool Calling",
        "OpenAI-совместимые API",
        "Groq",
        "ChatGPT",
        "Claude",
        "Cursor",
        "Copilot",
        "Алиса AI",
      ],
    },
  ],

  // ---------- Социальные сети ----------
  socials: [
    { name: "Telegram", url: "https://t.me/fgoosev" },
    {
      name: "MAX",
      url: "https://max.ru/u/f9LHodD0cOJtiGrOnCHK14HW-iWf1BFgIZTRTTaL1rXNTX05H8wppaaZtqc",
    },
    { name: "Email", url: "mailto:fgoosev@yandex.ru" },
  ],

  // ---------- Контакты ----------
  contact: {
    email: "fgoosev@yandex.ru",
    phone: "+7 996 129 7064",
    location: "г. Саратов (рассматриваю переезд в Москву)",
  },
  aiNote:
    "Сайт разработан автономным мультиагентным AI-пайплайном (LangGraph + LiteLLM): агенты с ролями Архитектора, Разработчика, Ревьюера и QA самостоятельно проектировали, писали и проверяли сборку кода на основе резюме",
  // ---------- Авторские права ----------
  copyright: "© 2026 Гусев Александр.",
  about: {
    paragraphs: [
      "Fullstack .NET-разработчик, который закрывает задачи бизнеса под ключ — от сбора требований и проектирования архитектуры до промышленного релиза и вывода собственных IT-продуктов в коммерческую эксплуатацию. Уверенно совмещаю высоконагруженный бэкенд на C# / .NET Core (ASP.NET Core, Minimal API, EF Core, PostgreSQL, MS SQL) с современным фронтендом на React, TypeScript, Tailwind CSS и Blazor.",
      "Фокусируюсь на практическом внедрении AI и LLM в инженерные процессы: проектирую автономных мультиагентных разработчиков (LangGraph, LiteLLM, MCP, Tool Calling), которые автоматизируют написание и ревью кода по поставленным задачам. Опираюсь на профильную магистратуру в области ИИ, опыт оптимизации баз данных от миллиона записей и прямую работу с заказчиками.",
    ],
    highlights: [
      {
        title: "Полный цикл (End-to-End)",
        description:
          "Веду проекты от общения с бизнесом и проектирования архитектуры до CI/CD и запуска в продакшен.",
      },
      {
        title: "Highload и БД 1M+ записей",
        description:
          "Проектирую отказоустойчивый бэкенд на .NET и оптимизирую сложные запросы в PostgreSQL и MS SQL.",
      },
      {
        title: "AI / LLM-инжиниринг",
        description:
          "Магистратура по ИИ и практический опыт создания автономных мультиагентных систем на LangGraph, LiteLLM и MCP.",
      },
    ],
  },
};
