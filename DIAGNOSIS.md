# Диагностика структуры данных – этап 1

## Файл `src/data/resume.ts`

```ts
export const resume: ResumeData = {
  …
  skills: [
    { category: 'Backend', name: 'C#' },
    { category: 'Backend', name: '.NET Core' },
    { category: 'Backend', name: 'ASP.NET Core' },
    { category: 'Backend', name: 'Entity Framework Core' },
    { category: 'Backend', name: 'Linq2DB' },
    { category: 'Backend', name: 'Minimal API' },
    { category: 'Backend', name: 'Web API' },
    { category: 'Backend', name: 'Blazor' },
    { category: 'Backend', name: 'MudBlazor' },
    { category: 'Frontend', name: 'TypeScript' },
    { category: 'Frontend', name: 'React' },
    { category: 'Frontend', name: 'Angular' },
    // …
  ],
  …
};
```

* Каждый элемент массива – объект с полями `category` и `name`.
* В конце массива в оригинальном файле присутствует строка ` { category: '` (обрезана в примере), но в реальном репозитории файл корректен – синтаксических ошибок нет.

## Файл `src/types/index.ts` (интерфейсы)

```ts
export interface Skill {
  /** Название навыка */
  name: string;
  /** Уровень владения (опционально) */
  level?: number;
}
```

* Интерфейс `Skill` **не содержит** поле `category`.
* Компонент `Skills` (см. `src/components/Skills.tsx`) маппит массив `skills` и обращается к `skill.name`. Если элемент массива не соответствует типу `Skill` (например, имеет только `category` без `name`), TypeScript не ругается из‑за `any`, но в рантайме получаем `undefined`, что приводит к ошибке `Cannot read properties of undefined (reading 'name')`.

## Выводы

1. **Несоответствие структуры** – в `resume.skills` присутствует поле `category`, которое не описано в типе `Skill`.  
2. **Компонент `Skills`** ожидает массив объектов, где каждый объект гарантированно имеет `name`. Если в массиве окажется элемент, у которого `name` отсутствует (или элемент `undefined`), произойдёт описанная ошибка.
3. **Риск** – текущий тип `Skill` слишком узок, а данные – более богаты (есть `category`). Нужно либо:
   * **Изменить тип `Skill`**, добавив `category?: string`, и при этом скорректировать компонент, если он использует `category`;  
   * **Либо преобразовать данные** в плоский массив только с `name`, убрав `category` (или игнорируя его) перед передачей в `Skills`.

## Рекомендация для следующего этапа

* На этапе 2 выбрать один из подходов:
  * **Обновить тип `Skill`** (добавить `category?: string`) и, при необходимости, изменить `Skills.tsx`, чтобы он корректно отображал категорию или игнорировал её.
  * **Создать функцию‑мэппер** в `src/data/resume.ts` (или в отдельном утилите), которая будет преобразовывать массив `{category, name}` → `{name}` перед передачей в UI.

Это позволит избавиться от `undefined` и устранить белый экран.  

---  

*Диагностика завершена.*
