<?php

namespace Modules\Order\Console;

use Illuminate\Console\Command;
use Modules\Order\Processors\CreateInvoiceForOrderProcessor;
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
    public function __construct(CreateInvoiceForOrderProcessor $createInvoiceForOrderProcessor)
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
        $order = Order::where('id', 1)->first();
        // $this->createInvoiceForOrderProcessor->getVatListType();
        // $this->createInvoiceForOrderProcessor->testGetCompany();
        // $this->createInvoiceForOrderProcessor->getPaymentAccount();
        $documentId = $this->createInvoiceForOrderProcessor->create($order);
        // var_dump($documentId);
        $successCheck = $this->createInvoiceForOrderProcessor->verifyInvoiceXML($documentId);
        var_dump($successCheck);
    }
}