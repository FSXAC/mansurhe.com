---
# Standard front matter stuff
author: Muchen He
layout: default

title: Projects
nav_active: /projects
---

<style>
.project-item img { width: 100% }
.project-item p.tech { line-height: 1.15; }
</style>

# ⭐️
{: .display-1}

This page contains projects that I've created or contributed to. They are ordered reverse-chronicalogically. (This page also needs to be updated ._.)


<div class="row">
{% for project in site.data.projects %}
	<div class="project-item {% if project.worthy %}worthy{% endif %} col-12 col-lg-4 mb-2">
	<h2>{{ project.name }}</h2>
	<p>
	{{ project.dates.start | date: "%B %Y" }}
	{% if project.dates.start != project.dates.end %} to {{ project.dates.end | date: "%B %Y" }}{% endif %}
	{% if project.onging %}(ongoing){% endif %}
	</p>
	{% if project.thumbnail %}<img src="{{ project.thumbnail }}" alt="{{ project.name }} thumbnail">{% endif %}
	<p>{{ project.description }}</p>
	{% for link in project.links %}
		<a class="btn btn-xs btn-outline-primary" href="{{ link[1] }}">{{ link[0] | capitalize }}</a>
	{% endfor %}
	<p title="Tech used" class="text-muted tech"><small>{{ project.tech | join: ', ' }}</small></p>
	</div>
{% endfor %}
</div>