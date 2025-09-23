# 📘 LeetCode Solutions

This repository contains my solved LeetCode problems, synced automatically with GitHub Actions.

---

## 📂 Normal Problems

{{#each problems}}

- [{{title}}](synced-problems/{{lang}}/{{title_slug}}.{{lang_ext}})
  {{#if (eq difficulty "Easy")}}![Easy](https://img.shields.io/badge/Easy-brightgreen.svg){{/if}}
  {{#if (eq difficulty "Medium")}}![Medium](https://img.shields.io/badge/Medium-yellow.svg){{/if}}
  {{#if (eq difficulty "Hard")}}![Hard](https://img.shields.io/badge/Hard-red.svg){{/if}}
  {{/each}}

---

## 📑 Study Plans

{{#each study_plans}}

### {{plan_name}}

{{#each problems}}

- [{{title}}](study-plans/{{plan_slug}}/{{lang}}/{{title_slug}}.{{lang_ext}})
  {{#if (eq difficulty "Easy")}}![Easy](https://img.shields.io/badge/Easy-brightgreen.svg){{/if}}
  {{#if (eq difficulty "Medium")}}![Medium](https://img.shields.io/badge/Medium-yellow.svg){{/if}}
  {{#if (eq difficulty "Hard")}}![Hard](https://img.shields.io/badge/Hard-red.svg){{/if}}
  {{/each}}

{{/each}}

---

> 🔄 Synced using [leetcode-sync](https://github.com/joshcai/leetcode-sync)
