<?php

namespace App\Console\Commands;

use App\Mail\TestMail;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class TestEmailProvider extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:test-mail';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test mail provider';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Mail::to(config('app.mail_owner'))->send(new TestMail());

        return Command::SUCCESS;
    }
}
