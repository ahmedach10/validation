<?php
require_once 'phpfile/html_start.php';
require_once 'phpfile/cssfile.php';
?>
<div class="col-lg-10 col-md-10 col-sm-11">
    <!-- Show Errors If Exists -->
    <div class="error alert alert-danger">You Have Some Form Errors</div>
    <form>
        <div class="form-group row">
            <label for="hpi" class="col-sm-2 col-form-label">Chief complaint & HPI</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="hpi" name="hpi">
                <label class="label"></label>
            </div>
        </div>
        <div class="form-group row">
            <label for="past-history" class="col-sm-2 col-form-label">Past History</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="past-history" name="past-history">
                <label class="label"></label>
            </div>
        </div>
        <div class="form-group row">
            <label for="ros" class="col-sm-2 col-form-label">Review of System</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="ros" name="ros">
                <label class="label"></label>
            </div>
        </div>
        <div class="form-group row">
            <label for="ph-ex" class="col-sm-2 col-form-label">Physical Examination</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="ph-ex" name="ph-ex">
                <label class="label"></label>
            </div>
        </div>
        <div class="form-group row">
            <label for="la-re" class="col-sm-2 col-form-label">Laboratory Result</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="la-re" name="la-re">
                <label class="label"></label>
            </div>
        </div>
        <div class="form-group row">
            <label for="ra-re" class="col-sm-2 col-form-label">Radiology Results</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="ra-re" name="ra-re">
                <label class="label"></label>
            </div>
        </div>
        <div class="form-group row">
            <label for="di-ic" class="col-sm-2 col-form-label">Diagnosis & ICD10</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="di-ic" name="di-ic">
                <label class="label"></label>
            </div>
        </div>
        <div class="form-group row">
            <label for="re-ad" class="col-sm-2 col-form-label">Reson of Admission</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="re-ad" name="re-ad">
                <label class="label"></label>
            </div>
        </div>
        <div class="form-group row">
            <label for="tr-pl" class="col-sm-2 col-form-label">Treatment Plan</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="tr-pl" name="tr-pl">
                <label class="label"></label>
            </div>
        </div>
        <div class="form-group row">
            <label for="note" class="col-sm-2 col-form-label">Note</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="note" name="note">
                <label class="label"></label>
            </div>
        </div>
        <div class="form-group row">
            <label for="department" class="col-sm-2 col-form-label">Department</label>
            <div class="col-sm-10">
                <select class="form-control" id="department" name="department">
                    <option value="0">اختر...</option>
                    <option value="1">اختر...1</option>
                    <option value="2">اختر...2</option>
                </select>
                <label class="label"></label>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-10">
                <button type="submit" id="btn" class="btn btn-primary">Sign in</button>
            </div>
        </div>
    </form>
</div>

<?php
require_once 'phpfile/jsfile.php';
require_once 'phpfile/html_end.php';
?>