Nuovo ordine. Dettagli spedizione:
<ul>
  <li> Order #: {{$order->order_number}}</li>
  <li> Order stato: {{$order->status}}</li>
  <li> Totale: {{$order->amount_total}}</li>
  <li> Email: {{$order->customer_email}}</li>
  <li> Nome: {{$order->customer_firstname}}</li>
  <li> Cognome: {{$order->customer_lastname}}</li>
  <li> Telefono: {{$order->customer_phone}}</li>
  <li> Indirizzo: {{$order->address_street}}</li>
  <li> Citta: {{$order->address_city}}</li>
  <li> Codice postale: {{$order->address_zipcode}}</li>
  <li> Regione: {{$order->address_region}}</li>
  <li> Paese: {{$order->address_country}}</li>
</ul>

Prodotti:
<ul>
@foreach($order->products as $product)
  <li> Nome: {{$product->product->title}} - Quantita: {{ $product->quantity }} - Taglia: {{ $product->size }}</li>
@endforeach
</ul>