<?php

namespace Modules\Order\Console;

use App\Mail\NewOrderAlert;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use Modules\Order\Processors\ManageInvoiceForOrderProcessor;
use Modules\Order\Entities\Order;


class TestFattureCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $name = 'order:test-fatture';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description.';

    protected $createInvoiceForOrderProcessor;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(ManageInvoiceForOrderProcessor $createInvoiceForOrderProcessor)
    {
        parent::__construct();
        $this->createInvoiceForOrderProcessor = $createInvoiceForOrderProcessor;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $order = Order::where('id', 2)->first();
        Mail::to($order->customer_email)->send(new NewOrderAlert($order));
        // $this->createInvoiceForOrderProcessor->getVatListType();
        // $this->createInvoiceForOrderProcessor->testGetCompany();
        // $this->createInvoiceForOrderProcessor->getPaymentAccount();
        // $documentId = $this->createInvoiceForOrderProcessor->create($order);
        // $successCheck = $this->createInvoiceForOrderProcessor->verifyInvoiceXML($documentId);
    }
}
