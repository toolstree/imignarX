function doPost(e) {

  const sheet =
    SpreadsheetApp
    .getActiveSpreadsheet()
    .getActiveSheet();

  const data =
    JSON.parse(
      e.postData.contents
    );

  sheet.appendRow([

    new Date(),

    data.email,

    data.archetype,

    data.confidence,

    data.primaryOffer,

    data.secondaryOffer

  ]);

  return ContentService
    .createTextOutput(
      JSON.stringify({
        success:true
      })
    )
    .setMimeType(
      ContentService.MimeType.JSON
    );
}
