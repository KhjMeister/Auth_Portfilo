<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;

class ResetPaswordMail extends Mailable
{
    use Queueable, SerializesModels;

    public $token;
    public $url;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($token)
    {
        $this->token = $token;

        $this->url = 'http://localhost:4200/response-password-reset?token='.$this->token;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('Email.passwordReset')->with([
            'token'=>$this->token
        ]);
    }
}
