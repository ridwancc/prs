package com.prs.backend;

import org.apache.http.HttpStatus;
import org.junit.Assert;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;

import java.net.URI;
import java.net.URISyntaxException;

import com.prs.backend.models.Account;
import com.prs.backend.models.Plate;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class BackendApplicationTests {

    @LocalServerPort
    private int port;

    @Test
    void contextLoads() {
    }

	@Autowired
    private TestRestTemplate restTemplate;

	private String GetURL(String... params)
    {
        String url = "http://localhost:" + port;

        for(String p : params)
        {
            url += "/" + p;
        }
        return url;
    }

	@Test
	@Order(1)
	public void TestAddPlate() throws URISyntaxException {
		URI uri = new URI(GetURL("plate"));
		String vrm = "aa10aaa";
		int price = 123;
		Plate plate = new Plate(vrm, price);
		HttpHeaders headers = new HttpHeaders();
		headers.set("X-COM-PERSIST", "True");
		HttpEntity<Plate> request = new HttpEntity<>(plate, headers);
		ResponseEntity<String> response = restTemplate.postForEntity(uri, request, String.class);
		Assert.assertEquals(HttpStatus.SC_CREATED, response.getStatusCodeValue());
	}

	@Test
	@Order(2)
	public void TestAddAccount() throws URISyntaxException {
		URI uri = new URI(GetURL("account"));
		String name = "test user";
		String email = "test@email.com";
		Account account = new Account(name, email);
		HttpHeaders headers = new HttpHeaders();
		headers.set("X-COM-PERSIST", "True");
		HttpEntity<Account> request = new HttpEntity<>(account, headers);
		ResponseEntity<String> response = restTemplate.postForEntity(uri, request, String.class);
		Assert.assertEquals(HttpStatus.SC_CREATED, response.getStatusCodeValue());
	}

	@Test
    @Order(3)
    public void TestGetPlate() throws URISyntaxException {
        URI uri = new URI(GetURL("plate", "1"));

        ResponseEntity<Plate> response = restTemplate.getForEntity(uri, Plate.class);
        Assert.assertEquals(HttpStatus.SC_OK, response.getStatusCodeValue());
        Assert.assertEquals("aa10aaa", response.getBody().getVrm());
        Assert.assertEquals(123, response.getBody().getPrice());
		Assert.assertEquals("available", response.getBody().getStatus());
    }
}
