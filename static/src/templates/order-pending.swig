<td
    class="
        {% if editingThis == true %}
            order-edit-mode
        {% endif %}
    "
>
    {% for item in items %}
        {{ item }}
    {% endfor %}
</td>
<td>
    <button
        class="js-complete"
        {% if editing %}
            disabled
        {% endif %}
    >complete</button>

    <button
        class="js-cancel"
        {% if editing %}
            disabled
        {% endif %}
    >cancel</button>

    <button
        class="js-edit"
        {% if editing %}
            disabled
        {% endif %}
    >edit</button>
</td>
