# Autodidacts Assistant



**Autodidacts Assistant** is an early personal project for building a study management app around a more flexible kind of digital notebook.



The basic idea is simple: I want a place to manage self-study tasks, projects, resources, and custom study plans. But the part I am most interested in exploring is a browser-based note-taking system that can support the kinds of material that normal task apps and plain text notes do not always handle well.



That means notes that may include:



* Japanese text for language learning

* Mathematical symbols and formulas for STEM study

* Music notation or composition sketches for music practice

* Links, annotations, and references between related study materials



This project is mainly being built for my own learning and use. It is not meant to present itself as a finished platform. Many of the more specialized features are desired directions that I want to experiment with as the app develops.



## Purpose



Self-study often involves more than simple checklists. A single learning routine might include vocabulary notes, grammar examples, formulas, diagrams, chord ideas, reading annotations, code snippets, and long-term project tasks.



Autodidacts Assistant is intended to become a personal workspace where those different kinds of study material can live together.



The goal is to combine:



* Task management

* Study project tracking

* Custom curriculum planning

* Resource organization

* Digital note-taking

* Lightweight linking and annotation



## Main Focus



At its core, this is a **study-focused task and project management app**.



Its more unique goal is to become a **multi-format study notebook** in the browser: a place where learning notes are not limited to ordinary plain text.



The kinds of note support I want to explore include:



### Japanese Language Notes



Support for Japanese language study is one of the main desired features.



Possible uses include:



* Language learning journals

* Vocabulary notes

* Grammar explanations

* Example sentences

* Mixed Japanese/English reflections

* Reading or presentation notes



### Math and STEM Notes



The app should eventually be comfortable for technical study notes that include symbols, formulas, and structured explanations.



Possible uses include:



* Mathematical notation

* Formula notes

* Problem-solving records

* Programming study notes

* Technical explanations

* Links between concepts and exercises



### Music and Composition Notes



Another desired direction is support for music study and composition practice.



Possible uses include:



* Music theory notes

* Chord progressions

* Rhythm ideas

* Melodic sketches

* Composition notes

* Possible notation snippets inside the browser



### Linked and Annotated Study Materials



A longer-term idea is to make notes more connected, so that resources, tasks, projects, and study reflections can reference each other.



Possible uses include:



* Linking a task to a note

* Linking a curriculum module to resources

* Annotating study material

* Connecting related ideas across subjects

* Building a lightweight personal knowledge system



## Starting Scope



The first version will stay smaller and focus on the foundation:



* User authentication

* Study dashboard

* Study tasks

* Learning projects

* Subject or interest categories

* Basic notes

* Resource lists

* Simple progress tracking



The specialized notebook features, such as Japanese text support, mathematical notation, music notation, and annotation, are desired long-term additions rather than completed features.



## Example Uses



This app could eventually help me:



* Track programming study and portfolio work

* Keep a Japanese study journal

* Store grammar notes and example sentences

* Write technical notes with formulas or code snippets

* Keep music theory and composition notes

* Organize reading, writing, and research projects

* Connect tasks, notes, resources, and study plans



## Tech Stack



This project is being built with:



* Laravel

* React

* Inertia.js

* TypeScript

* Tailwind CSS

* PostgreSQL or SQLite for development

* Pest or PHPUnit for testing

* GitHub Actions for basic workflow checks



## Project Status



This project is in early development.



The immediate goal is to build a useful foundation for managing study projects, tasks, notes, and resources. The more unusual browser-based note-taking features are the part I want to grow into gradually as the core app becomes stable.



## Installation



Clone the repository:



```bash

git clone https://github.com/abdulaalaa/autodidacts-assistant.git

cd autodidacts-assistant

```



Install PHP dependencies:



```bash

composer install

```



Install JavaScript dependencies:



```bash

npm install

```



Copy the environment file:



```bash

cp .env.example .env

```



Generate the application key:



```bash

php artisan key:generate

```



Run migrations:



```bash

php artisan migrate

```



Start the development server:



```bash

composer run dev

```



## Notes



This project is mainly being built for personal use, learning, and experimentation. The feature set may change as the project develops and as I discover what is actually useful in practice.

