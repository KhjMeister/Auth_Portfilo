@component('mail::message')
# Change password Request

Click on the button below

@component('mail::button', ['url' => $url])
Resset Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
