<section>
    <strong>Order: </strong>
    {% if items.length == 0 %}
        <em>Empty</em> (Please choose 🍔, 🍟, or 🍦 below)
    {% endif %}

    {% for item in items %}
        {{ item }}
    {% endfor %}
</section>

<section>
    <div class="order-input-items">
        <button class="js-item order-input-item" data-value="🍔">🍔 burger</button>
        <button class="js-item order-input-item" data-value="🍟">🍟 fries</button>
        <button class="js-item order-input-item" data-value="🍦">🍦 cone</button>
    </div>
    <div>
        <button class="js-cancel">❌ clear</button>
        <button class="js-submit">✅ submit</button>
    </div>
</section>
